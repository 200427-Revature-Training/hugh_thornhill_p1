truncate ers_reimbursement restart identity CASCADE;
truncate ers_users restart identity CASCADE;
truncate ers_user_roles restart identity CASCADE;
truncate ers_reimbursement_type restart identity CASCADE;
truncate ers_reimbursement_status restart identity cascade;

insert into ers_user_roles (user_role) values
	('Manager'),
	('Employee');
select * from ers_user_roles;

insert into ers_reimbursement_type (reimb_type) values
	('Travel'),
	('Food'),
	('Certification'),
	('Moving expenses');
select * from ers_reimbursement_type;
	
insert into ers_reimbursement_status (reimb_status) values
	('Pending'),
	('Accepted'),
	('Rejected');
select * from ers_reimbursement_status;
	
insert into ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) values
	('hughthorn', '$2b$10$3TG6MHEUQxCNaDuFrLK/c.rtOLbxBcsNPEAYBa24Bc7DGmWsDks/m
', 'Hugh', 'Thornhill', 'hlowerthornhill@gmail.com', 2),
	('jons', '$2b$10$prYapC8OndbcvP5oSf.FI.CleNmIDypYEuBG/lp63D8VBZMVKDy2u
', 'Jon', 'Smith', 'jsmith@gmail.com', 1);

insert into ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) values
('jackFrost', '$2b$10$oj3uO5GnvvN81/9eIMJr1.GQazl0NL.UWVzKSg88VVbpScfyyKvAG
', 'Henry', 'Thornhill', 'hthornhill@gmail.com', 2);

update ers_users set ers_password = '$2b$10$6titjkhCChKAYsGCXPbGUulbhSbxnwh0FvyfPZMuelX6bXfY/cg8S' where id = 3;

update ers_users set ers_password = '$2b$10$DF8BechbOHlbfFl3Iql4KeJztbLi5E4A7d3sLL.0FQg3rv/9q9fq2' where id = 1;

update ers_users set ers_password = '$2b$10$ng1C6GI.jwsrsnEYfI0zS.f7bIJHDCquJ/ik16hqxWEEEsGD.wFnm' where id = 2;
--
--update ers_users set user_first_name = 'Henry' where id = 3;

select * from ers_users;

SELECT * from public.ers_users WHERE user_email = 'hlowerthornhill@gmail.com';
	
insert into ers_reimbursement (
	reimb_amount, 
	reimb_submitted, 
	reimb_resolved, 
	reimb_description, 
	reimb_receipt, 
	reimb_author, 
	reimb_resolver,
	reimb_status_id,
	reimb_type_id
	) values
	('100', '2020-06-01 12:00', '2020-06-01 13:00', 'For dinner with client', 'receipt.img', 1, 2, 1, 2);

insert into ers_reimbursement (
	reimb_amount, 
	reimb_submitted, 
	reimb_resolved, 
	reimb_description, 
	reimb_receipt, 
	reimb_author, 
	reimb_resolver,
	reimb_status_id,
	reimb_type_id
	) values
	('100', '2020-06-01 12:00', '2020-06-01 13:00', 'For dinner with client', 'receipt.img', 3, 2, 1, 2);

INSERT INTO ers_reimbursement (reimb_amount, reimb_submitted, reimb_resolved, 
        reimb_description, reimb_receipt, reimb_author, reimb_resolver, 
        reimb_status_id, reimb_type_id) VALUES ('200', '2020-06-01 12:00', 
        '2020-06-01 13:00', 'For dinner with client', 'receipt.img', 3, 2, 1, 2);
select * from ers_reimbursement;

update ers_reimbursement set reimb_author = 2 where id = 1;

SELECT * FROM public.ers_reimbursement_employee_view WHERE reimb_author = 2;

SELECT * FROM public.ers_reimbursement LEFT JOIN 
       ers_reimbursement_status ON ers_reimbursement.id = ers_reimbursement_status.id
       WHERE reimb_author = 1;
       
SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status
        ON ers_reimbursement.id = ers_reimbursement_status.id
        WHERE ers_reimbursement.id = 1;
       
       SELECT * FROM ers_reimbursement LEFT JOIN ers_reimbursement_status
       ON ers_reimbursement.reimb_status_id = ers_reimbursement_status.id;
      
      SELECT * from ers_users Where ers_username='user4';
