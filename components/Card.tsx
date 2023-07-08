import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Card(props: any) {
    return(
        <div className={'max-w-sm border rounded-2xl max-h-[580px] shadow-2xl'}>
            <Image className={'min-h-[255px] rounded-2xl'} src={props.image} alt={props.alt} height={'255'} width={'384'}/>
            <div className={'p-7 flex-col space-y-12 content-center'}>
                <div className={'flex justify-between items-center mx-1'}>
                    <h1 className={'text-2xl font-semibold'}>{props.heading}</h1>
                    <h2 className={'text-xl text-[#ffa500] font-semibold'}>{props.price}</h2>
                </div>
                <p>{props.description}</p>
                <div className={'flex justify-center'}>
                    <Button>Add to cart</Button>
                </div>
            </div>
        </div>
    )
}