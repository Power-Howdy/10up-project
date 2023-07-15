import Image from "next/image"
type Props = {}

const Boundary = (props: Props) => {

    return (
        <div className='my-10 flex'>
            <div className='sm:w-full md:w-1/2'>
                <div className='italic text-lg'>Building Without Boundaries</div>
                <div className='text-left mt-5'>
                    <p>The best talent isn’t found in a single zip code, and an international clientele requires a global perspective. From New York City, to the wilds of Idaho, to a dozen countries across Europe, our model empowers us to bring in the best strategists, designers, and engineers, wherever they may live. Veterans of commercial agencies, universities, start ups, nonprofits, and international technology brands, our team has an uncommon breadth.</p>
                    <p>Influencing communities around the world, our team leads meetups, speaks at local events, and visits clients wherever they may be.
                    </p>
                    <p>Independence from traditional “brick and mortar” offices, freedom from commutes, and flexible schedules across nearly a dozen time zones means our team works when and where they’re most inspired, available when our clients need them.
                    </p>
                </div>
            </div>
            <div className='sm:w-full md:w-1/2'>
            <Image className='float-right' src="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_400,h_400/prod/wp-content/themes/10up-sept2016/assets/img/where-we-are.png" width="400" height="400" alt="Bulding without boundaries"/>
            </div>
        </div>
    )
}

export default Boundary