# Heuristics

## Brute Force

A brute force heuristic is a problem-solving approach in computer science where you enumerate all possible solutions of the problem in a systematic way, and then select the best solution according to the problem's constraints and requirements.

The term "brute force" implies that there's no additional intelligence or insight applied to the problem — the algorithm simply generates all possible solutions and checks each one.

For example, if you're trying to solve a password cracking problem, a brute force approach would be to try all possible combinations of characters until you find the correct password.

While brute force methods can theoretically solve any problem given enough time, they are generally not efficient and are often impractical for problems of a larger scale due to the high computational cost. However, they can serve as a baseline method to compare the efficiency of more sophisticated algorithms.

## Backtracking

Backtracking is a general algorithmic technique that involves exploring all possible solutions to a problem by incrementally building candidates and abandoning a candidate ("backtracking") as soon as it is determined that the candidate cannot be possibly extended to a valid solution.

Backtracking is used when the problem requires searching through all possible valid configurations in a systematic way. It is often used for solving combinatorial problems, such as puzzles, permutation and combination problems, and constraint satisfaction problems.

### Here are some signs that a problem might be solved using backtracking:

1. **The problem involves finding all (or some) solutions**: Backtracking is all about exploring all potential solutions, so it's a good fit for problems where you need to find all valid configurations, or determine if at least one valid configuration exists.

2. **The problem can be broken down into smaller subproblems**: Backtracking typically involves a recursive process where each step of the problem is a smaller instance of the same problem.

3. **The problem involves constraints**: If the problem involves a set of choices and constraints on those choices, backtracking can be used to incrementally build candidates and abandon them if they violate the constraints.

Examples of problems that can be solved using backtracking include the Eight Queens puzzle, generating all permutations of a set, and solving Sudoku puzzles.

## Greedy

A greedy algorithm is a simple, intuitive algorithm that uses a "best-first" approach to solve problems, where the optimal choice is made at each decision point with the hope that these local optimums will lead to a global optimum solution.

### Here are some characteristics of greedy algorithms:

1. **Local Optima**: Greedy algorithms make the locally optimal choice at each step with the hope that these local choices will lead to a global optimum.

2. **Irrevocable**: Once a decision is made, it is not undone. There's no backtracking.

3. **Simplicity**: Greedy algorithms are generally straightforward and often easier to understand and implement than other algorithms.

4. **Short-sighted**: They make decisions based on immediate benefits rather than long-term benefits.

### To identify a problem that can be solved using a greedy algorithm, look for these signs:

1. **Greedy-choice property**: A global optimum can be arrived at by selecting a local optimum.

2. **Optimal substructure**: An optimal solution to the problem contains an optimal solution to subproblems.

Examples of problems that can be solved using greedy algorithms include Dijkstra's algorithm for finding the shortest path in a graph, Kruskal's and Prim's algorithms for finding the minimum spanning tree in a graph, and the problem of finding the most efficient way to multiply a series of matrices.
