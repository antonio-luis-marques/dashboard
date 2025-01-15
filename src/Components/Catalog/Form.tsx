import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import { Product } from '@/types/Product'

interface IForm {
    setNewProduct: Dispatch<SetStateAction<Product>>;
    newProduct: Product;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddProduct: () => void;
}

export default function Form({ newProduct, setNewProduct, handleAddProduct, handleImageUpload }: IForm) {
    return (
        <Card sx={{ marginBottom: 4 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Adicionar Novo Produto
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Nome"
                            fullWidth
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Categoria"
                            fullWidth
                            value={newProduct.category}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, category: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Descrição"
                            fullWidth
                            multiline
                            value={newProduct.description}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, description: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Preço (MT)"
                            type="number"
                            fullWidth
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    price: Number(e.target.value) || 0,
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Estoque"
                            type="number"
                            fullWidth
                            value={newProduct.stock}
                            onChange={(e) =>
                                setNewProduct({
                                    ...newProduct,
                                    stock: Number(e.target.value) || 0,
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            component="label"
                            fullWidth
                            color="primary"
                        >
                            Carregar Imagem
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={handleImageUpload}
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {newProduct.image && (
                            <img
                                src={newProduct.image}
                                alt="Produto"
                                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddProduct}
                            fullWidth
                        >
                            Adicionar Produto
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
