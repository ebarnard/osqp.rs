# osqp.rs

Rust wrapper for [OSQP](https://osqp.org/): the Operator Splitting QP Solver.

The OSQP (Operator Splitting Quadratic Program) solver is a numerical optimization package for solving problems in the form
```
minimize        0.5 x' P x + q' x

subject to      l <= A x <= u
```
where `x in R^n` is the optimization variable.

The objective function is defined by a positive semidefinite matrix `P in S^n_+` and vector `q in R^n`.

The linear constraints are defined by matrix `A in R^{m x n}` and vectors `l in R^m U {-inf}^m`, `u in R^m U {+inf}^m`.

[Rust Interface Documentation](https://docs.rs/osqp/)

[Solver Documentation](https://osqp.org/)
