export interface Proof_list {
    id: number;
    proof_image: File | string | null;
    completed_date: string;
    task: number;
    user: string;
    notes?: string | null;
}