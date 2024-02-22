/*

There are n cars going to the same destination along a one-lane road.
The destination is target miles away.

You are given two integer array position and speed, both of length n, 
where position[i] is the position of the ith car and speed[i] is the
speed of the ith car (in miles per hour).

A car can never pass another car ahead of it, 
but it can catch up to it and drive bumper to bumper at the same speed.
The faster car will slow down to match the slower car's speed.
The distance between these two cars is ignored
(i.e., they are assumed to have the same position).

A car fleet is some non-empty set of cars driving at the same
position and same speed. Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point,
it will still be considered as one car fleet.

Return the number of car fleets that will arrive at the destination.

*/

const EXAMPLES = [
  /*
    The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
    The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
    The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
    Note that no other cars meet these fleets before the destination, so the answer is 3.
  */
  {
    input: {
      target: 12,
      position: [10, 8, 0, 5, 3],
      speed: [2, 4, 1, 1, 3],
    },
    output: 3,
  },
  /* There is only one car, hence there is only one fleet. */
  {
    input: {
      target: 10,
      position: [3],
      speed: [3],
    },
    output: 1,
  },
  /*
    The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
    Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
  */
  {
    input: {
      target: 100,
      position: [0, 2, 4],
      speed: [4, 2, 1],
    },
    output: 1,
  },
];

/**
 * Greedy
 * Time O(n^2) | Space O(n)
 */
function getArrivingFleetCount({
  target,
  position,
  speed,
}: {
  target: number;
  position: number[];
  speed: number[];
}): number {
  // Zip position and speed and sort descending distance to target.
  const pairs = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  const etaStack = [];

  // Loop over cars starting from cars furthest from the destination.
  for (let i = 0; i < pairs.length; i++) {
    const car = pairs[i];
    // Calculate how long the car has to drive until its destination.
    const eta = (target - car[0]) / car[1];
    // Push its ETA onto the Stack.
    etaStack.push(eta);

    // If the car at the back has a lower ETA than the car in front of it,
    // then merge it with the car ahead by popping it off the stack.
    if (
      etaStack.length >= 2 &&
      etaStack[etaStack.length - 1] <= etaStack[etaStack.length - 2]
    ) {
      etaStack.pop();
    }
  }

  return etaStack.length;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('Greedy', () => {
    EXAMPLES.forEach((example) => {
      expect(getArrivingFleetCount(example.input)).toEqual(example.output);
    });
  });
}
