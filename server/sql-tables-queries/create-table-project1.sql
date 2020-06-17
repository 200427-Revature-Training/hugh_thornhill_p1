drop table ers_reimbursement cascade;
drop table ers_users cascade;
drop table ers_user_roles cascade;
drop table ers_reimbursement_type cascade;
drop table ers_reimbursement_status cascade;
drop view ers_reimbursement_employee_view cascade;
drop view ers_reimbursement_manager_view cascade;

create table if not exists ers_user_roles (
	id INTEGER generated always as identity primary key,
	user_role VARCHAR(10)
);

create table if not exists ers_users (
	id INTEGER generated always as identity primary key,
	ers_username VARCHAR(50) unique,
	ers_password VARCHAR(150),
	user_first_name VARCHAR(100),
	user_last_name VARCHAR(100),
	user_email VARCHAR(150) unique,
	user_role_id INTEGER references ers_user_roles(id) not NULL
);

create table if not exists ers_reimbursement_type (
	id INTEGER generated always as identity primary key,
	reimb_type VARCHAR(50)
);

create table if not exists ers_reimbursement_status (
	id INTEGER generated always as identity primary key,
	reimb_status VARCHAR(10)
);

create table if not exists ers_reimbursement (
	id INTEGER generated always as identity primary key not null,
	reimb_amount MONEY,
	reimb_submitted TIMESTAMP,
	reimb_resolved TIMESTAMP,
	reimb_description VARCHAR(250),
	reimb_receipt VARCHAR(250),
	reimb_author INTEGER references ers_users(id) not NULL,
	reimb_resolver INTEGER references ers_users(id),
	reimb_status_id INTEGER references ers_reimbursement_status(id) not NULL,
	reimb_type_id INTEGER references ers_reimbursement_type(id) not NULL
);

--create view ers_users_roles_view as
--select ers_users.id as id,
--	ers_users.user_first_name
--	ers_users.user_last_name
--	ers_users.user_role_id "rol"
--	

create view ers_reimbursement_employee_view as
select ers_reimbursement.id as id,
	ers_reimbursement.reimb_amount,
	ers_reimbursement.reimb_submitted,
	ers_reimbursement.reimb_resolved,
	ers_reimbursement.reimb_description,
	ers_reimbursement.reimb_receipt,
--	ers_users.user_first_name "author_first_name",
--	ers_users.user_last_name "author_last_name",
	ers_reimbursement.reimb_author,
	ers_users.user_first_name "resolver_first_name",
	ers_users.user_last_name "resolver_last_name",
	ers_reimbursement_status.reimb_status "reimb_status",
	ers_reimbursement_type.reimb_type "reimb_type"
	from ers_reimbursement
--	left join ers_users on ers_reimbursement.reimb_author = ers_users.id
	left join ers_users on ers_reimbursement.reimb_resolver = ers_users.id
	left join ers_reimbursement_status on ers_reimbursement.reimb_status_id = ers_reimbursement_status.id
	left join ers_reimbursement_type on ers_reimbursement.reimb_type_id = ers_reimbursement_type.id
	where ers_users.user_role_id = 2;

SELECT * FROM public.ers_reimbursement_employee_view;

create view ers_reimbursement_manager_view as
select ers_reimbursement.id as id,
	ers_reimbursement.reimb_amount,
	ers_reimbursement.reimb_submitted,
	ers_reimbursement.reimb_resolved,
	ers_reimbursement.reimb_description,
	ers_reimbursement.reimb_receipt,
	ers_users.user_first_name "author_first_name",
	ers_users.user_last_name "author_last_name",
	ers_reimbursement.reimb_resolver,
--	ers_users.user_first_name "resolver_first_name",
--	ers_users.user_last_name "resolver_last_name",
	ers_reimbursement_status.reimb_status "reimb_status",
	ers_reimbursement_type.reimb_type "reimb_type"
	from ers_reimbursement
	left join ers_users on ers_reimbursement.reimb_author = ers_users.id
--	left join ers_users as resolver on ers_reimbursement.reimb_resolver = resolver.id where resolver.id = 1
	left join ers_reimbursement_status on ers_reimbursement.reimb_status_id = ers_reimbursement_status.id
	left join ers_reimbursement_type on ers_reimbursement.reimb_type_id = ers_reimbursement_type.id;
select * from public.ers_reimbursement_manager_view;

SELECT * FROM public.ers_reimbursement_manager_view
        WHERE reimb_status = 'Pending';

SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status
    ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.id
    WHERE ers_reimbursement_status.id = 1
    
    update ers_reimbursement set reimb_status_id = 2 where id = 1;
    
    SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status 
    ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.id 
    WHERE ers_reimbursement_status.id = 1

SELECT * FROM ers_reimbursement WHERE reimb_status_id=1
 