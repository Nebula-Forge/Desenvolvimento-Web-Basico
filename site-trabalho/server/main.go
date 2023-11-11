package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Endpoint para lidar com a solicitação de login
	router.POST("/login", func(c *gin.Context) {
		// Obtenha os dados do formulário
		username := c.PostForm("Usuário")
		password := c.PostForm("Senha")

		// Adicione lógica de autenticação aqui (por exemplo, verificar no banco de dados)
		log.Println(username + "|" + password)
		// Responda ao cliente (apenas um exemplo)
		c.JSON(http.StatusOK, gin.H{"status": "Login realizado com sucesso"})
	})

	// Endpoint para lidar com a solicitação de cadastro
	router.POST("/cadastrar", func(c *gin.Context) {
		// Obtenha os dados do formulário
		nome := c.PostForm("NomeCompleto")
		cpf := c.PostForm("CPF")
		telefone := c.PostForm("Telefone")
		email := c.PostForm("Email")
		senha := c.PostForm("senha")

		// Adicione lógica de armazenamento no banco de dados aqui
		log.Println(nome + "|" + cpf + "|" + telefone + "|" + email + "|" + senha)
		// Responda ao cliente (apenas um exemplo)
		c.JSON(http.StatusOK, gin.H{"status": "Cadastro realizado com sucesso"})
	})

	// Inicie o servidor
	router.Run(":8080")
}
