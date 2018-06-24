export class Task {
    id: number;
    title: string;
    status: string;
    startdate: Date;
    enddate: Date;
    starred: Boolean;
    attachment: string;
    comment: string[];
}