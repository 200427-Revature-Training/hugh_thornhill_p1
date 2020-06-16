# API Design

 ## USERS

 ### Employees
 GET/employee/:reimbAuthorID/reimbursements -  Get reimbursements by ONLY the employee's reimb author id\

 POST/reimbursement - Post a new reimbursement request\

 ### Managers
 GET/managers/reimbursements/all - retrieves all reimbursement requests\

 GET/managers/reimbursements/:id - retrieves specifice reimbursement request\

 GET/managers/reimbursements/:statusID - retrieves all reimbursements by a certain status\

 PATCH/reimbursement/ - approve or deny reimbursement request
 
 ### Both
 POST/users/login/ - login for users\
 POST/users/logout - logout for users\