function ListDataView({ list }) {
    return (
        <div className="my-10">
            {/* <p className="border-x border-t border-black text-center bg-rose-400">
                {list.listName}
            </p>
            {list?.listData?.map((data, index) => (
                <tr key={index} className="border border-black">
                    <th className="border border-black p-3">{index + 1}</th>
                    <td className="border border-black pl-4">{data}</td>
                </tr>
            ))
            } */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {list.listName}
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
        </div>
    )
}

export default ListDataView;