var searchIndex = JSON.parse('{\
"osqp":{"doc":"The OSQP (Operator Splitting Quadratic Program) solver is …","i":[[3,"CscMatrix","osqp","A matrix in Compressed Sparse Column format.",null,null],[12,"nrows","","The number of rows in the matrix.",0,null],[12,"ncols","","The number of columns in the matrix.",0,null],[12,"indptr","","The CSC column pointer array.",0,null],[12,"indices","","The CSC index array.",0,null],[12,"data","","The CSC data array.",0,null],[4,"LinsysSolver","","The linear system solver for OSQP to use.",null,null],[13,"Qdldl","","",1,null],[13,"MklPardiso","","",1,null],[3,"Settings","","The settings used when initialising a solver.",null,null],[3,"DualInfeasibilityCertificate","","A proof of dual infeasibility.",null,null],[3,"Failure","","A problem that failed to be solved.",null,null],[4,"PolishStatus","","The status of the polish operation.",null,null],[13,"Successful","","",2,null],[13,"Unsuccessful","","",2,null],[13,"Unperformed","","",2,null],[3,"PrimalInfeasibilityCertificate","","A proof of primal infeasibility.",null,null],[3,"Solution","","A solution to a problem.",null,null],[4,"Status","","The result of solving a problem.",null,null],[13,"Solved","","",3,null],[13,"SolvedInaccurate","","",3,null],[13,"MaxIterationsReached","","",3,null],[13,"TimeLimitReached","","",3,null],[13,"PrimalInfeasible","","",3,null],[13,"PrimalInfeasibleInaccurate","","",3,null],[13,"DualInfeasible","","",3,null],[13,"DualInfeasibleInaccurate","","",3,null],[13,"NonConvex","","",3,null],[3,"Problem","","An instance of the OSQP solver.",null,null],[11,"new","","Initialises the solver and validates the problem.",4,[[["into",8],["into",8],["cscmatrix",3],["settings",3],["cscmatrix",3]],[["setuperror",4],["result",4],["problem",3]]]],[11,"update_lin_cost","","Sets the linear part of the cost function to <code>q</code>.",4,[[]]],[11,"update_bounds","","Sets the lower and upper bounds of the constraints to <code>l</code> …",4,[[]]],[11,"update_lower_bound","","Sets the lower bound of the constraints to <code>l</code>.",4,[[]]],[11,"update_upper_bound","","Sets the upper bound of the constraints to <code>u</code>.",4,[[]]],[11,"warm_start","","Warm starts the primal variables at <code>x</code> and the dual …",4,[[]]],[11,"warm_start_x","","Warm starts the primal variables at <code>x</code>.",4,[[]]],[11,"warm_start_y","","Warms start the dual variables at <code>y</code>.",4,[[]]],[11,"update_P","","Updates the elements of matrix <code>P</code> without changing its …",4,[[["into",8],["cscmatrix",3]]]],[11,"update_A","","Updates the elements of matrix <code>A</code> without changing its …",4,[[["into",8],["cscmatrix",3]]]],[11,"update_P_A","","Updates the elements of matrices <code>P</code> and <code>A</code> without changing …",4,[[["into",8],["into",8],["cscmatrix",3],["cscmatrix",3]]]],[11,"solve","","Attempts to solve the quadratic program.",4,[[],["status",4]]],[4,"SetupError","","An error that can occur when setting up the solver.",null,null],[13,"DataInvalid","","",5,null],[13,"SettingsInvalid","","",5,null],[13,"LinsysSolverLoadFailed","","",5,null],[13,"LinsysSolverInitFailed","","",5,null],[13,"NonConvex","","",5,null],[13,"MemoryAllocationFailed","","",5,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"drop","","",4,[[]]],[11,"from","","",0,[[["cscmatrix",3]],["cscmatrix",3]]],[11,"from","","",0,[[],["cscmatrix",3]]],[11,"clone","","",0,[[],["cscmatrix",3]]],[11,"clone","","",1,[[],["linsyssolver",4]]],[11,"clone","","",6,[[],["settings",3]]],[11,"clone","","",3,[[],["status",4]]],[11,"clone","","",7,[[],["solution",3]]],[11,"clone","","",8,[[],["primalinfeasibilitycertificate",3]]],[11,"clone","","",9,[[],["dualinfeasibilitycertificate",3]]],[11,"clone","","",10,[[],["failure",3]]],[11,"clone","","",2,[[],["polishstatus",4]]],[11,"default","","",6,[[],["settings",3]]],[11,"eq","","",0,[[["cscmatrix",3]]]],[11,"ne","","",0,[[["cscmatrix",3]]]],[11,"eq","","",1,[[["linsyssolver",4]]]],[11,"eq","","",2,[[["polishstatus",4]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"hash","","",2,[[]]],[11,"from_column_iter_dense","","Creates a dense CSC matrix with its elements filled with …",0,[[["intoiterator",8]],["cscmatrix",3]]],[11,"from_row_iter_dense","","Creates a dense CSC matrix with its elements filled with …",0,[[["intoiterator",8]],["cscmatrix",3]]],[11,"is_structurally_upper_tri","","Returns <code>true</code> if the matrix is structurally upper …",0,[[]]],[11,"into_upper_tri","","Extracts the upper triangular elements of the matrix.",0,[[],["cscmatrix",3]]],[11,"rho","","Sets the ADMM step rho.",6,[[],["settings",3]]],[11,"sigma","","Sets the ADMM step sigma.",6,[[],["settings",3]]],[11,"scaling","","Sets the number of heuristic data scaling iterations.",6,[[["option",4]],["settings",3]]],[11,"adaptive_rho","","Enables choosing rho adaptively.",6,[[],["settings",3]]],[11,"adaptive_rho_interval","","Sets the number of iterations between rho adaptations.",6,[[["option",4]],["settings",3]]],[11,"adaptive_rho_tolerance","","Sets the tolerance for adapting rho.",6,[[],["settings",3]]],[11,"adaptive_rho_fraction","","Set the interval for adapting rho as a fraction of the …",6,[[],["settings",3]]],[11,"max_iter","","Sets the maximum number of ADMM iterations.",6,[[],["settings",3]]],[11,"eps_abs","","Sets the absolute convergence tolerance.",6,[[],["settings",3]]],[11,"eps_rel","","Sets the relative convergence tolerance.",6,[[],["settings",3]]],[11,"eps_prim_inf","","Sets the primal infeasibility tolerance.",6,[[],["settings",3]]],[11,"eps_dual_inf","","Sets the dual infeasibility tolerance.",6,[[],["settings",3]]],[11,"alpha","","Sets the linear solver relaxation parameter.",6,[[],["settings",3]]],[11,"linsys_solver","","Sets the linear system solver to use.",6,[[["linsyssolver",4]],["settings",3]]],[11,"delta","","Sets the polishing regularization parameter.",6,[[],["settings",3]]],[11,"polish","","Enables polishing the ADMM solution.",6,[[],["settings",3]]],[11,"polish_refine_iter","","Sets the number of iterative refinement steps to use when …",6,[[],["settings",3]]],[11,"verbose","","Enables writing progress to stdout.",6,[[],["settings",3]]],[11,"scaled_termination","","Enables scaled termination criteria.",6,[[],["settings",3]]],[11,"check_termination","","Sets the number of ADMM iterations between termination …",6,[[["option",4]],["settings",3]]],[11,"warm_start","","Enables warm starting the primal and dual variables from …",6,[[],["settings",3]]],[11,"time_limit","","Sets the solve time limit.",6,[[["duration",3],["option",4]],["settings",3]]],[11,"update_rho","","Sets the ADMM step rho.",4,[[]]],[11,"update_max_iter","","Sets the maximum number of ADMM iterations.",4,[[]]],[11,"update_eps_abs","","Sets the absolute convergence tolerance.",4,[[]]],[11,"update_eps_rel","","Sets the relative convergence tolerance.",4,[[]]],[11,"update_eps_prim_inf","","Sets the primal infeasibility tolerance.",4,[[]]],[11,"update_eps_dual_inf","","Sets the dual infeasibility tolerance.",4,[[]]],[11,"update_alpha","","Sets the linear solver relaxation parameter.",4,[[]]],[11,"update_delta","","Sets the polishing regularization parameter.",4,[[]]],[11,"update_polish","","Enables polishing the ADMM solution.",4,[[]]],[11,"update_polish_refine_iter","","Sets the number of iterative refinement steps to use when …",4,[[]]],[11,"update_verbose","","Enables writing progress to stdout.",4,[[]]],[11,"update_scaled_termination","","Enables scaled termination criteria.",4,[[]]],[11,"update_check_termination","","Sets the number of ADMM iterations between termination …",4,[[["option",4]]]],[11,"update_warm_start","","Enables warm starting the primal and dual variables from …",4,[[]]],[11,"update_time_limit","","Sets the solve time limit.",4,[[["duration",3],["option",4]]]],[11,"x","","Returns the primal variables at the solution if the …",3,[[],["option",4]]],[11,"solution","","Returns the solution if the problem is <code>Solved</code>.",3,[[],[["solution",3],["option",4]]]],[11,"iter","","Returns the number of iterations taken by the solver.",3,[[]]],[11,"setup_time","","Returns the time taken for the setup phase.",3,[[],["duration",3]]],[11,"solve_time","","Returns the time taken for the solve phase.",3,[[],["duration",3]]],[11,"polish_time","","Returns the time taken for the polish phase.",3,[[],["duration",3]]],[11,"run_time","","Returns the total time taken by the solver.",3,[[],["duration",3]]],[11,"rho_updates","","Returns the number of rho updates.",3,[[]]],[11,"rho_estimate","","Returns the current best estimate of rho.",3,[[]]],[11,"x","","Returns the primal variables at the solution.",7,[[]]],[11,"y","","Returns the dual variables at the solution.",7,[[]]],[11,"polish_status","","Returns the status of the polish operation.",7,[[],["polishstatus",4]]],[11,"obj_val","","Returns the primal objective value.",7,[[]]],[11,"pri_res","","Returns the norm of primal residual.",7,[[]]],[11,"dua_res","","Returns the norm of dual residual.",7,[[]]],[11,"delta_y","","Returns the certificate of primal infeasibility.",8,[[]]],[11,"delta_x","","Returns the certificate of dual infeasibility.",9,[[]]]],"p":[[3,"CscMatrix"],[4,"LinsysSolver"],[4,"PolishStatus"],[4,"Status"],[3,"Problem"],[4,"SetupError"],[3,"Settings"],[3,"Solution"],[3,"PrimalInfeasibilityCertificate"],[3,"DualInfeasibilityCertificate"],[3,"Failure"]]},\
"osqp_sys":{"doc":"","i":[[5,"osqp_set_default_settings","osqp_sys","Set default settings from constants.h file assumes …",null,null],[5,"osqp_setup","","Initialize OSQP solver allocating memory.",null,null],[5,"osqp_solve","","Solve quadratic program",null,null],[5,"osqp_cleanup","","Cleanup workspace by deallocating memory",null,null],[5,"osqp_update_lin_cost","","Update linear cost in the problem @param  work  Workspace …",null,null],[5,"osqp_update_bounds","","Update lower and upper bounds in the problem constraints …",null,null],[5,"osqp_update_lower_bound","","Update lower bound in the problem constraints @param  …",null,null],[5,"osqp_update_upper_bound","","Update upper bound in the problem constraints @param  …",null,null],[5,"osqp_warm_start","","Warm start primal and dual variables @param  work …",null,null],[5,"osqp_warm_start_x","","Warm start primal variable @param  work Workspace …",null,null],[5,"osqp_warm_start_y","","Warm start dual variable @param  work Workspace structure …",null,null],[5,"osqp_update_P","","Update elements of matrix P (upper triangular) without …",null,null],[5,"osqp_update_A","","Update elements of matrix A without changing sparsity …",null,null],[5,"osqp_update_P_A","","Update elements of matrix P (upper triangular) and …",null,null],[5,"osqp_update_rho","","Update rho. Limit it between RHO_MIN and RHO_MAX. @param  …",null,null],[5,"osqp_update_max_iter","","Update max_iter setting @param  work         Workspace …",null,null],[5,"osqp_update_eps_abs","","Update absolute tolernace value @param  work        …",null,null],[5,"osqp_update_eps_rel","","Update relative tolernace value @param  work        …",null,null],[5,"osqp_update_eps_prim_inf","","Update primal infeasibility tolerance @param  work        …",null,null],[5,"osqp_update_eps_dual_inf","","Update dual infeasibility tolerance @param  work          …",null,null],[5,"osqp_update_alpha","","Update relaxation parameter alpha @param  work  Workspace …",null,null],[5,"osqp_update_warm_start","","Update warm_start setting @param  work           Workspace…",null,null],[5,"osqp_update_scaled_termination","","Update scaled_termination setting @param  work            …",null,null],[5,"osqp_update_check_termination","","Update check_termination setting @param  work             …",null,null],[5,"osqp_update_delta","","Update regularization parameter in polish @param  work    …",null,null],[5,"osqp_update_polish","","Update polish setting @param  work          Workspace …",null,null],[5,"osqp_update_polish_refine_iter","","Update number of iterative refinement steps in polish …",null,null],[5,"osqp_update_verbose","","Update verbose setting @param  work        Workspace …",null,null],[5,"osqp_update_time_limit","","Update time_limit setting @param  work            …",null,null],[17,"QDLDL_SOLVER","","",null,null],[17,"MKL_PARDISO_SOLVER","","",null,null],[6,"linsys_solver_type","","Linear System Solvers *",null,null],[17,"OSQP_DATA_VALIDATION_ERROR","","",null,null],[17,"OSQP_SETTINGS_VALIDATION_ERROR","","",null,null],[17,"OSQP_LINSYS_SOLVER_LOAD_ERROR","","",null,null],[17,"OSQP_LINSYS_SOLVER_INIT_ERROR","","",null,null],[17,"OSQP_NONCVX_ERROR","","",null,null],[17,"OSQP_MEM_ALLOC_ERROR","","",null,null],[17,"OSQP_WORKSPACE_NOT_INIT_ERROR","","",null,null],[6,"osqp_error_type","","Solver Errors  *",null,null],[3,"csc","","Matrix in compressed-column form. The structure is used …",null,null],[12,"nzmax","","< maximum number of entries",0,null],[12,"m","","< number of rows",0,null],[12,"n","","< number of columns",0,null],[12,"p","","< column pointers (size n+1); col indices (size nzmax) …",0,null],[12,"i","","< row indices, size nzmax starting from 0",0,null],[12,"x","","< numerical values, size nzmax",0,null],[12,"nz","","< number of entries in triplet matrix, -1 for csc",0,null],[6,"LinSysSolver","","Linear system solver structure (sublevel objects …",null,null],[3,"OSQPScaling","","Problem scaling matrices stored as vectors",null,null],[12,"c","","< cost function scaling",1,null],[12,"D","","< primal variable scaling",1,null],[12,"E","","< dual variable scaling",1,null],[12,"cinv","","< cost function rescaling",1,null],[12,"Dinv","","< primal variable rescaling",1,null],[12,"Einv","","< dual variable rescaling",1,null],[3,"OSQPSolution","","Solution structure",null,null],[12,"x","","< primal solution",2,null],[12,"y","","< Lagrange multiplier associated to \\\\f$l <= Ax <= u\\\\f$",2,null],[3,"OSQPInfo","","Solver return information",null,null],[12,"iter","","< number of iterations taken",3,null],[12,"status","","< status string, e.g. \'solved\'",3,null],[12,"status_val","","< status as c_int, defined in constants.h",3,null],[12,"status_polish","","< polish status: successful (1), unperformed (0), (-1) …",3,null],[12,"obj_val","","< primal objective",3,null],[12,"pri_res","","< norm of primal residual",3,null],[12,"dua_res","","< norm of dual residual",3,null],[12,"setup_time","","< time taken for setup phase (seconds)",3,null],[12,"solve_time","","< time taken for solve phase (seconds)",3,null],[12,"update_time","","< time taken for update phase (seconds)",3,null],[12,"polish_time","","< time taken for polish phase (seconds)",3,null],[12,"run_time","","< total time  (seconds)",3,null],[12,"rho_updates","","< number of rho updates",3,null],[12,"rho_estimate","","< best rho estimate so far from residuals",3,null],[3,"OSQPPolish","","Polish structure",null,null],[12,"Ared","","< active rows of A <    Ared = vstack[Alow, Aupp]",4,null],[12,"n_low","","< number of lower-active rows",4,null],[12,"n_upp","","< number of upper-active rows",4,null],[12,"A_to_Alow","","< Maps indices in A to indices in Alow",4,null],[12,"A_to_Aupp","","< Maps indices in A to indices in Aupp",4,null],[12,"Alow_to_A","","< Maps indices in Alow to indices in A",4,null],[12,"Aupp_to_A","","< Maps indices in Aupp to indices in A",4,null],[12,"x","","< optimal x-solution obtained by polish",4,null],[12,"z","","< optimal z-solution obtained by polish",4,null],[12,"y","","< optimal y-solution obtained by polish",4,null],[12,"obj_val","","< objective value at polished solution",4,null],[12,"pri_res","","< primal residual at polished solution",4,null],[12,"dua_res","","< dual residual at polished solution",4,null],[3,"OSQPData","","Data structure",null,null],[12,"n","","< number of variables n",5,null],[12,"m","","< number of constraints m",5,null],[12,"P","","< the upper triangular part of the quadratic cost matrix …",5,null],[12,"A","","< linear constraints matrix A in csc format (size m x n)",5,null],[12,"q","","< dense array for linear part of cost function (size n)",5,null],[12,"l","","< dense array for lower bound (size m)",5,null],[12,"u","","< dense array for upper bound (size m)",5,null],[3,"OSQPSettings","","Settings struct",null,null],[12,"rho","","< ADMM step rho",6,null],[12,"sigma","","< ADMM step sigma",6,null],[12,"scaling","","< heuristic data scaling iterations; if 0, then disabled.",6,null],[12,"adaptive_rho","","< boolean, is rho step size adaptive?",6,null],[12,"adaptive_rho_interval","","< number of iterations between rho adaptations; if 0, …",6,null],[12,"adaptive_rho_tolerance","","< tolerance X for adapting rho. The new rho has to be X …",6,null],[12,"adaptive_rho_fraction","","< interval for adapting rho (fraction of the setup time)",6,null],[12,"max_iter","","< maximum number of iterations",6,null],[12,"eps_abs","","< absolute convergence tolerance",6,null],[12,"eps_rel","","< relative convergence tolerance",6,null],[12,"eps_prim_inf","","< primal infeasibility tolerance",6,null],[12,"eps_dual_inf","","< dual infeasibility tolerance",6,null],[12,"alpha","","< relaxation parameter",6,null],[12,"linsys_solver","","< linear system solver to use",6,null],[12,"delta","","< regularization parameter for polishing",6,null],[12,"polish","","< boolean, polish ADMM solution",6,null],[12,"polish_refine_iter","","< number of iterative refinement steps in polishing",6,null],[12,"verbose","","< boolean, write out progress",6,null],[12,"scaled_termination","","< boolean, use scaled termination criteria",6,null],[12,"check_termination","","< integer, check termination interval; if 0, then …",6,null],[12,"warm_start","","< boolean, warm start",6,null],[12,"time_limit","","< maximum number of seconds allowed to solve the problem; …",6,null],[3,"OSQPWorkspace","","OSQP Workspace",null,null],[12,"data","","Problem data to work on (possibly scaled)",7,null],[12,"linsys_solver","","Linear System solver structure",7,null],[12,"pol","","Polish structure",7,null],[12,"rho_vec","","< vector of rho values",7,null],[12,"rho_inv_vec","","< vector of inv rho values",7,null],[12,"constr_type","","< Type of constraints: loose (-1), equality (1), …",7,null],[12,"x","","< Iterate x",7,null],[12,"y","","< Iterate y",7,null],[12,"z","","< Iterate z",7,null],[12,"xz_tilde","","< Iterate xz_tilde",7,null],[12,"x_prev","","< Previous x",7,null],[12,"z_prev","","< Previous z",7,null],[12,"Ax","","< scaled A * x",7,null],[12,"Px","","< scaled P * x",7,null],[12,"Aty","","< scaled A\' * y",7,null],[12,"delta_y","","< difference between consecutive dual iterates",7,null],[12,"Atdelta_y","","< A\' * delta_y",7,null],[12,"delta_x","","< difference between consecutive primal iterates",7,null],[12,"Pdelta_x","","< P * delta_x",7,null],[12,"Adelta_x","","< A * delta_x",7,null],[12,"D_temp","","< temporary primal variable scaling vectors",7,null],[12,"D_temp_A","","< temporary primal variable scaling vectors storing norms …",7,null],[12,"E_temp","","< temporary constraints scaling vectors storing norms of …",7,null],[12,"settings","","< problem settings",7,null],[12,"scaling","","< scaling vectors",7,null],[12,"solution","","< problem solution",7,null],[12,"info","","< solver information",7,null],[12,"timer","","< timer object",7,null],[12,"first_run","","flag indicating whether the solve function has been run …",7,null],[12,"clear_update_time","","flag indicating whether the update_time should be cleared",7,null],[12,"rho_update_from_solve","","flag indicating that osqp_update_rho is called from …",7,null],[12,"summary_printed","","< Has last summary been printed? (true/false)",7,null],[3,"linsys_solver","","Define linsys_solver prototype structure",null,null],[12,"type_","","< linear system solver type functions",8,null],[12,"solve","","",8,null],[12,"free","","< free linear system solver (only in desktop version)",8,null],[12,"update_matrices","","",8,null],[12,"update_rho_vec","","",8,null],[12,"nthreads","","< number of threads active",8,null],[17,"OSQP_DUAL_INFEASIBLE_INACCURATE","","",null,null],[17,"OSQP_PRIMAL_INFEASIBLE_INACCURATE","","",null,null],[17,"OSQP_SOLVED_INACCURATE","","",null,null],[17,"OSQP_SOLVED","","",null,null],[17,"OSQP_MAX_ITER_REACHED","","",null,null],[17,"OSQP_PRIMAL_INFEASIBLE","","",null,null],[17,"OSQP_DUAL_INFEASIBLE","","",null,null],[17,"OSQP_SIGINT","","",null,null],[17,"OSQP_TIME_LIMIT_REACHED","","",null,null],[17,"OSQP_NON_CVX","","",null,null],[17,"OSQP_UNSOLVED","","",null,null],[6,"ffi_osqp_solve_status","","",null,null],[6,"osqp_int","","",null,null],[6,"osqp_float","","",null,null],[4,"OSQPTimer","","",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"clone","","",2,[[],["osqpsolution",3]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]]],"p":[[3,"csc"],[3,"OSQPScaling"],[3,"OSQPSolution"],[3,"OSQPInfo"],[3,"OSQPPolish"],[3,"OSQPData"],[3,"OSQPSettings"],[3,"OSQPWorkspace"],[3,"linsys_solver"],[4,"OSQPTimer"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);