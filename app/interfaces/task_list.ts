export interface TasksListInterface {
    id: number;
    title: string;
    description?: string;
    priority: number;
    is_completed: boolean;
    created_date: string;
    modified_date: string;
    help_image?: File | string;
    is_recurrent: boolean;
    recurrent_period?: string;
}