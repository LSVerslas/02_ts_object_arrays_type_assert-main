enum AlignItems {
    start = 'start',
    center = "center",
    end = "end",
    stretch = "stretch",
}

type AlignType = 'start' | 'center' | 'end' | 'stretch';

const stre: AlignType = 'stretch';

function alignFlex(prop: string, align: AlignItems):void {
    console.log(`Item: ${prop} is aligned ${align}`);
}
alignFlex('h1', AlignItems.end);
alignFlex('h1', stre);

