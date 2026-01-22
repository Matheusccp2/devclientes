interface CreateCustomerProps {
    name: string;
    email: string;
}
export declare class CreateCustomerService {
    execute({ name, email }: CreateCustomerProps): Promise<{
        name: string;
        email: string;
        id: string;
        status: boolean;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
}
export {};
//# sourceMappingURL=CreateCustomerService.d.ts.map