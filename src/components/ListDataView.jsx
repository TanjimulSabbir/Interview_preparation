function ListDataView({ list }) {
    return (
        <div>
            <p className="p-2 text-center text-lg md:text-xl font-bold bg-green-400 rounded-lg md:mt-5">{list.listName}</p>

            {list?.listData?.map((data, index) => (
                <div key={index} className="py-3">
                    <p> <span className="font-bold">{index + 1}.</span> {data}</p>
                </div>
            ))
            }
        </div>
    )
}

export default ListDataView;