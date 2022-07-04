
export async function callAPIGetData(page: number) {
    let result = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
    );
    let resultJson = await result.json();
    console.log("resultJson", resultJson)
    return resultJson;
    }
