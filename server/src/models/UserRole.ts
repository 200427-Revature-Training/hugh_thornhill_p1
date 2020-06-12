export class UserRole {
    id: number;
    userRole: string;

    static from(obj: UserRoleRow): UserRole {
        const userRole = new UserRole(
            obj.id,
            obj.user_role
        );
        return userRole;
    }

    constructor(
        id: number,
        userRole: string
    )
    {
    this.id = id;
    this.userRole = userRole;
    }
}

export interface UserRoleRow {
    id: number;
    user_role: string;
}