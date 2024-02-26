export default function RenderCondition({children, condition}) {
    return condition ? children : null
};
