function ListDataView({ list }) {
    return (
        <div className="my-4">
            <p className="border-x border-t border-black">
                {list.listName}
            </p>
            {list?.listData?.map((data, index) => (
                <>
                    <tr key={index} className="border border-black">
                        <th className="border border-black">{index + 1}</th>
                        <td className="border border-black">{data}</td>
                    </tr>
                </>
            ))
            }
        </div>
    )
}

export default ListDataView;