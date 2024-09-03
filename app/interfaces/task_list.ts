export interface TasksListInterface {
    id: number;
    instances?: [
        {
            id?: number;
            instance_number?: number;
            scheduled_time: string | number;
            is_completed?: boolean;
            task?: number;
        }
    ]
    title: string;
    description?: string;
    priority: number;
    is_completed: boolean;
    created_date: string;
    modified_date: string;
    help_image?: File | string;
    is_recurrent: boolean;
    recurrent_period?: string;
    recurrent_days: number;
    proof_image?: File | string;
    is_archived: boolean;
}