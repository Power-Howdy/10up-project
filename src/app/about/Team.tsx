import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MemberSliceState } from '../../lib/redux/slices/membersSlice/membersSlice';
import {
    membersSlice,
    useSelector,
    useDispatch,
    selectMembers,
    getMemberAsync
} from '@/lib/redux'
import { nanoid } from 'nanoid';
import MemberCard from '@/components/MemberCard';
const Team = () => {
    const dispatch = useDispatch()
    const members = useSelector(selectMembers)
    const [filtered, setFiltered] = useState<MemberSliceState[]>([])
    const [filter, setFilter] = useState(0);
    const filters = ['All', 'Leadership', 'Strategists', 'Designers', 'Engineers']
    useEffect(() => {
        dispatch(getMemberAsync())
    }, [dispatch]);
    useEffect(() => {
        //filter members
        switch (filter) {
            case 0:
                setFiltered(members);
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }, [filter, members])

    // console.log(members, filtered);
    return (
        <div className='w-full'>
            <div className='w-full relative'>
                <Image src="https://10up.com/wp-content/themes/10up-sept2016/dist/img/header-page-about.jpg" className='w-full' width={1024} height={100} alt='Team header image' />
                <div className='absolute inset-0 flex flex-col items-center justify-center '>
                    <div className='text-white bg-black bg-opacity-50 rounded-full w-64 h-64 items-center justify-center inset-0 flex flex-col text-4xl'>
                        Our Team
                    </div>
                </div>
            </div>
            <div className='w-full bg-black px-5'>
                <div className='text-center py-12 text-white'>
                    {
                        filters.map(item => <button className='mx-3' key={nanoid()} onClick={() =>{
                            setFilter(filters.indexOf(item));
                        }}>{item}</button>)
                    }
                </div>
                <div className='grid grid-cols-4 gap-4'>
                { filtered.map(mem => <MemberCard key={nanoid()} name={mem.name} role={mem.role} avatar={mem.avatar}/>)}
                </div>
            </div>
        </div>
    )
}

export default Team;