import { environment } from '../../../../environments/environment';

export class BookingDetails {
    eventType: string = environment.eventType.videoMsg;
    artistId: any = '';
    userId: any = '';
    razorpayOrderId: any = '';
    razorpayPaymentId: any = '';
    amount: string = '';
    someoneElse: boolean = false;
    to?: string = '';
    from?: string = '';
    message?: string = '';
    eventDate: Date = new Date();
    videoCallDuration?: string = '';
    videoCallTimeSlot?: string = '';
    makeItPublic?: boolean = false;
    orderStatus: string = environment.orderStatus.orderStatus_Pending;
    paymentStatus: any = '';
    uploadUrl?: string = '';
    refundComment?: string = '';
    artistType?: string = '';
}

