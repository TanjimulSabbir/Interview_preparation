import ListDataView from "./ListDataView";

function ListView({ lists, listLength }) {
    return (
        <>
            <div className={`flex flex-col md:${listLength <= 2 && "flex-row"} gap-10 justify-center`}>
                {lists?.map(list => <ListDataView key={list.listId} list={list}></ListDataView>)}
            </div>
        </>
    )
}

export default ListView;