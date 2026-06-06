interface Employee{
    id:number,
    name:string,
    department: "HR" | "ENGINEERING" | "SALES",
    salary: number,
    isActive : boolean
}

type apiresponse <T>= {
    success:boolean,
    message: string,
    data?: T
}

class EmployeeService {
    private employees: Employee [] =[]

    async addemployee(emp: Employee):Promise<apiresponse<Employee>> {
        this.employees.push(emp)
        return {
            success:true,
            message:"Successfully added",
            data: emp
        }
    }

    async findemployee(id:number|string):Promise<apiresponse<Employee>>{
        const emp = this.employees.find((emp)=> 
            emp.id===id || emp.name===id 
        )
        if(!emp){
            return{
                success:false,
                message:"Employee not found"
            }
        }
        else{
            return{
                success:true,
                message:"Employee found",
                data:emp
            }
        }
    }

    async updatesalary(id:number,sal:number):Promise<apiresponse<Employee>>{
        const emp =(await this.findemployee(id)).data
        if(!emp){
            return {
                success: false,
                message: "Invalid id or name"
            }
        }
        else {
            emp.salary = sal
            return{
            success: true,
            message: "Salary updated",
            data:emp
        }}
    }

    async highestpaid():Promise<apiresponse<Employee>>{
        if(this.employees.length===0){
            return {
                success: false,
                message: "No employees found"
            }
        }
        const highestPaidEmployee = this.employees.reduce((prev,curr)=>prev.salary > curr.salary?prev : curr)
        return {
            success: true,
            message: "Highest paid employee found",
            data: highestPaidEmployee
        }
    }
}

async function main(){
    const employee = new EmployeeService()
    const emp1:Employee = {
        id: 101,
        name: "John Doe",
        department: "ENGINEERING",
        salary: 85000,
        isActive: true
    }
    const emp2:Employee = {
        id: 102,
        name: "Sarah Johnson",
        department: "HR",
        salary: 65000,
        isActive: true
    }
    console.log(await employee.addemployee(emp1))
    console.log(await employee.addemployee(emp2))

    console.log(await employee.findemployee("John Doe"))

    console.log(await employee.updatesalary(101,10000))
    console.log(await employee.findemployee(101))

    console.log(await employee.highestpaid())
}
main()

