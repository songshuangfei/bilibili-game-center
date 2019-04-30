import getJson from "./getJson"

class DB {
    private tableName:string;
    private cols:string[];
    private conditions:{key:string,value:any};
    private rows:any[];

    constructor(){
        this.tableName = null;
        this.cols = [];
        this.conditions = {key:null,value:null};
        this.rows = [];
    }

    public useTable(tableName:string){
        this.tableName = tableName;
        return this;
    }

    public select(...cols:string[]){
        for(let c of cols){
            this.cols.push(c);
        }
        return this;
    }

    /**
     * 
     * @param keyValue where key equal value
     */
    public where(key:string , value:any){
        this.conditions.key = key;
        this.conditions.value = value;
        return this;
    }

    public async result(){
        this.rows = await getJson(this.tableName);
        // 一定只能先条件筛选，再列筛选
        this.conditonFilter();
        this.colsFilter();
        return this.rows;
    }

    private colsFilter() {
        if (this.cols.length === 0) {
            return 
        }

        let result:any[] = [];
        for(let row of this.rows){
            let tmpRow:any = {};
            for(let key of this.cols){
                // 筛选出需要的键值对
                tmpRow[key] = row[key];
            }
            result.push(tmpRow);
        }
        this.rows = result;
    }

    private conditonFilter(){

        if(this.conditions.key===null&&this.conditions.value===null){
            return;
        }
        const result = this.rows.filter(row => row[this.conditions.key] == this.conditions.value);
        this.rows = result;
    }
}

export default DB;