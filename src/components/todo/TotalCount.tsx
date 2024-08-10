import React from "react";
type TotalCountProps = {
    totalCount: number,
    totalCompletedCount: number
}
const TotalCount = ({ totalCount, totalCompletedCount }: TotalCountProps) => {

    return (
        <div className="border border-black my-2 flex justify-around items-center w-5/6 m-auto">
            <div className="text-2xl ">Get Things Done –<br /> One Task at a Time!</div>
            <div className="bg-slate-200 my-2 flex items-center justify-center text-5xl rounded-full w-36 h-32 border border-black">
                {totalCount} / {totalCompletedCount}
            </div>
        </div>
    )
}

export default React.memo(TotalCount)