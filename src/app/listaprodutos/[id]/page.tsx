    import Link from "next/link";

    export default function Produto ({params} : {params: {id:string}}) {

        return (
            <>
            <h1> Produtos </h1>
            <p> Dados do Produto {params.id} </p>
            <Link href= {"/listaprodutos"}> Home </Link>
            </>
        );
    }