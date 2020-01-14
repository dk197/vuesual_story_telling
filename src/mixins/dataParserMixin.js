import Papa from 'papaparse'
export const DataParserMixin = {
    methods: {
        getDataFromCsv(filename) {
            console.log(filename);
            return new Promise((resolve) => {
                Papa.parse('../../data/' + filename, {
                    header: true,
                    download: true,
                    dynamicTyping: true,
                    complete: function(results) {
                        console.log(results);
                        const data = results.data
                        resolve(data)
                        // const xdata = parseData(data)
                        // resolve(xdata)
                    }
                });
            })
        },
        parseData(data) {
            const keys = Object.keys(data[0])
            const parsedData = []
        
            data.forEach(row => {
                for (let index = 0; index < keys.length; index++) {
                    if(parsedData.length <= index) {
                            parsedData.push({
                                name: keys[index],
                                data: []
                            })
                    }
                    parsedData[index].data.push(row[keys[index]])
                }   
            });
        
            // the category (name === '' for multidimensional csv files) has to be at index 1
            for (let index = 0; index < parsedData.length; index++) {
                if(parsedData[index].name === '') {
                    const cats = parsedData[index]
                    parsedData.splice(index, 1)
                    parsedData.unshift(cats)
                }
            }
        
            const categories = parsedData[0].data
            parsedData.splice(0, 1)
        
            const finalData = {
                categories: categories,
                series: parsedData
            }
        
            return finalData
        }  
    }
}