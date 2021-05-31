export default interface optionsType {
    urlColumnCode: String,
    image: {
        column: String,
        width: Number,
        height: Number,
        ligthbox: Boolean
    },
    columns: {
        thead: {
            align: String,
            styles: Object 
        },
        tbody: {
            align: String,
            styles: Object
        }
    },
    excludeColumns: Array<String>
}