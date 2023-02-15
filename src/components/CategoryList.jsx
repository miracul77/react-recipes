import {CategoryItem} from './CategoryItem'

function CategoryList ({catalog = []}) {

    return <div className="list">
        {catalog.map((category) => (
            <CategoryItem key={category.idCategory} {...category} />
        ))}
    </div>

}

export {CategoryList}