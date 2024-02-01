import ListDataView from "./ListDataView";

function ListView({ lists }) {
    console.log(lists?.listData, "from js question")
    return (
        <>
            <div className="overflow-x-auto">
                {lists?.map(list => <ListDataView key={list.listId} list={list}></ListDataView>)}
            </div>
        </>
    )
}

export default ListView;