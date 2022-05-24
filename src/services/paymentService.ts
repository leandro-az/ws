import {PaymentRepository} from '../repository/paymentRepository';
import {PaymentModel} from '../model/paymentModel';
import {Service} from 'typedi';

@Service()
export class PaymentService{
    constructor(private paymentRepository: PaymentRepository){
    }

    public async findAll(): Promise<PaymentModel[]> {
        const result: PaymentModel[] = await this.paymentRepository.findAll();
        return result;
    }
    public async createOne(value: number, discount: number, due_date: Date, due_payment: Date, paid: boolean): Promise<boolean> {
        const payment: PaymentModel = {value,discount,due_date,due_payment,paid,create_on: new Date(),modifier_on: new Date()};
        const result: boolean = await this.paymentRepository.createOne(payment);
        return result;
    }
    public async deleteOne(id: number): Promise<boolean> {
        const qry={where: {id}};
        const payment: PaymentModel | undefined = await this.paymentRepository.findOne(qry);
        if (payment) {
            return await this.paymentRepository.deleteOne(payment);
        } else {
            return false;
        }
    }
    public async updateOne(id: number,value: number, discount: number, due_date: Date, due_payment: Date, paid: boolean): Promise<boolean> {
        const qry={where: {id}};
        const payment: PaymentModel | undefined = await this.paymentRepository.findOne(qry);
        if (payment) {
            payment.value = value;
            payment.discount = discount;
            payment.due_date = due_date;
            payment.due_payment = due_payment;
            payment.paid = paid;
            payment.modifier_on=new Date();
            return await this.paymentRepository.updateOne(payment);
        } else {
            return false;
        }
    }
}
