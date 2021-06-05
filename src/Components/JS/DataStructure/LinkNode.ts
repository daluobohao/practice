class Node {
    element: any
    next: null
    constructor(element:any) {
        this.element = element
        this.next = null
    }
}

export class LinkedList {
    head: any
    length: number
    constructor() {
        this.head = null
        this.length = 0
    }
    getHead() {
        return this.head
    }
    // 追加元素
    append(element:any) {
        const node = new Node(element)
        let current = null
        if(this.head === null) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
        // return this
    }
    // 任意位置插入元素
    insert(position:number, element:any) {
        if(position>=0 && position <= this.length) {
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0
            if(position === 0) {
                this.head = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        }
        return false
    }

    // 移除指定位置的元素
    removeAt(position: number) {
        // 检查越界值
        if(position > -1 && position < this.length) {
            let current = this.head
            let previous = null
            let index = 0
            if(position === 0) {
                this.head = current.next
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        }
        return null
    }

    // 寻找元素下标
    findIndex(element:any) {
        let current = this.head
        let index = -1
        while (current) {
            if(element === current.element) {
                return index + 1
            }
            index++
            current = current.next
        }
        return -1
    }

    // 删除指定元素
    remove(element: any) {
        const index = this.findIndex(element)
        return this.removeAt(index)
    }

    // 判断是否为空列表
    isEmpty() {
        return !!this.length
    }

    // 获取链表的长度
    size() {
        return this.length
    }

    // 转为字符串
    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += ` ${current.element}`
            current = current.next
        }
        return string
    }
}

