import ListDataView from "./ListDataView";

function ListView({ lists }) {
    console.log(lists?.listData, "from js question")
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {lists?.map(list => <ListDataView className="my-3" key={list.listId} list={list}></ListDataView>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListView;