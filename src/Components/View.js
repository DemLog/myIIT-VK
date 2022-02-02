
export const View = (props) => {
    const childs = props.children
    const activeView = props.activeView

    const renderComponents = [];

    for (let child of childs) {
        console.log(child)
        if (child.props.id === activeView || child.props.id === undefined)
            renderComponents.push(child)
    }

    return (renderComponents);

}