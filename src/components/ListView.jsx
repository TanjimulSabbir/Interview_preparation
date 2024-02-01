import ListDataView from "./ListDataView";

function ListView({ lists }) {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-10 justify-center">
                {lists?.map(list => <ListDataView key={list.listId} list={list}></ListDataView>)}
            </div>
        </>
    )
}

export default ListView;