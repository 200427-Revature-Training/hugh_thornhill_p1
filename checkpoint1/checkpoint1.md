# API Design

 ## USERS

 ### Employees
 GET/reimbursement/:reimbAuthorID -  Get reimbursements by ONLY the employee's reimb author id\
 
 GET/reimbursement/:id - Get single reimbursement\

 POST/reimbursement - Post a new reimbursement request\

 -- if able to:\
 PATCH/users/:id/reimbursements/:id - patch reimbursement request

 ### Managers
 GET/reimbursements - retrieves all reimbursement requests\

 GET/reimbursements/:id - retrieves specifice reimbursement request\

 GET/reimbursements/:statusID - retrieves all reimbursements by a certain status\

 GET/reimbursements/:reimbAuthorID - retreives all reimbursements of a certain employee\

 PATCH/reimbursement/:id - approve or deny reimbursement request
 
 ### Both
 POST/login/users/:id - login for users\
 POST/logout/users - logout for users\