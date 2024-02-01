function ListDataView({ list }) {
    return (
        <>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead className="border border-black">
                        <tr>
                            <th className="border border-black p-3 ">Serial No.</th>
                            <th className="border border-black p-3">{list.listName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list?.listData?.map((data, index) => (
                            <tr key={index} className="border border-black">
                                <th className="border border-black p-3">{index + 1}</th>
                                <td className="border border-black pl-4">{data}</td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListDataView;