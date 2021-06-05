import  { LinkedList } from './DataStructure/LinkNode'

const link = new LinkedList();

link.append('a')
link.append('b')
link.append('c')
link.append('d')
link.append('e')
link.append('f')
link.append('g')

const  reverse = (link: any):any => {
    let head:any
    if(link && link.getHead) {
        head = link.getHead();
    }
    if (!head || head.next == null) return head;
    const last = head ? reverse(head.next) : null;
    head.next.next = head;
    head.next = null;
    return last;
}

console.log('link', link, link.toString());

console.log(reverse(link))