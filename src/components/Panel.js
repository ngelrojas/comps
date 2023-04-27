import classNames from "class-names";

function Panel({children, className, ...rest}){
    const finalclassName = classNames(
        'border rounded p-3 shadow bg-white w-full', 
        className
    );
    return <div {...rest} className={finalclassName}>{children}</div>
}

export default Panel;