export class ReservationEntity {
    private readonly reservationId: number;
    private readonly userId: number;
    private readonly roomId: number; 
    private readonly userName: string;   
    private readonly startTime: Date;
    private readonly endTime: Date;
    private status: number;
    private readonly regdate: Date;

    constructor(
        reservationId: number,
        userId: number,
        roomId: number,
        userName: string,
        startTime: Date,
        endTime: Date,
        status: number,
        regdate: Date
    ) {
        this.reservationId = reservationId;
        this.userId = userId;
        this.roomId = roomId;
        this.userName = userName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.status = status;
        this.regdate = regdate;
    }

    // Getters
    public getReservationId(): number {
        return this.reservationId;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getRoomId(): number {
        return this.roomId;
    }

    public getUserName(): string {
        return this.userName;
    }

    public getStartTime(): Date {
        return this.startTime;
    }

    public getEndTime(): Date {
        return this.endTime;
    }

    public getStatus(): number {
        return this.status;
    }

    public getRegdate(): Date {
        return this.regdate;
    }

    // Status만 변경 가능하도록 setter 제공
    public setStatus(status: number): void {
        this.status = status;
    }
}