import { useFetch } from "../hooks/useFetch"
export const FetchApp = () => {

  const {data, isLoading, error} = useFetch(url)


  return (
    <>
        <h2>Lista de Usuarios:</h2>
        {isLoading ? <h4>Cargando...</h4> : error ? <h4>Ha ocurrido un error</h4> :
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">id</th>
            <td>name</td>
            <td>email</td>
            <td>website</td>
            </tr>
        </tbody>
        </table> }
    </>
  )
}
