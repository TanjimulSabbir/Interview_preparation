function ListDataView({ listData }) {
    return (
        <>
            {listData?.map((data, index) => (<tr key={index} className="border border-black">
                <th className="border border-black">{index + 1}</th>
                <td className="border border-black">{data}</td>
            </tr>))
            }
        </>
    )
}

export default ListDataView;