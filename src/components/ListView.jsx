import ListDataView from "./ListDataView";

function ListView({ lists }) {
    console.log(lists?.listData, "from js question")
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody className="border border-black">
                        <tr>
                            {lists?.map(list => (<th key={list.listId} >{list.listName}</th>))}
                        </tr>
                        {lists?.map(list => <ListDataView key={list.listId} listData={list.listData} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListView;