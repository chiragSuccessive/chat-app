import algoliasearch from 'algoliasearch';

const client = algoliasearch('ER3NAQQS4Q', 'd36e30aeaea06433127637a202fd1419');
const index = client.initIndex('demo_Demo');

const search = async (text) => {
  try {    
    const {hits} = await index.search({ query: text });
    return hits;
  } catch (err) {
    console.log(err.debugData);
  }
};

const add = async (data) => {  
  const temp = await index.addObject(data);
  return data;
}

const deleteById = async (id) => {
  const temp = await index.deleteObject(id);
  console.log('---------', temp);
}


export {search, add, deleteById };