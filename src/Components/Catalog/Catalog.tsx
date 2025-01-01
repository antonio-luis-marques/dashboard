'use client'
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
};

const ProductCatalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [newProduct, setNewProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
  });
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0 && newProduct.stock >= 0) {
      setProducts([...products, { ...newProduct, id: `PROD-${Date.now()}` }]);
      setNewProduct({ id: '', name: '', description: '', price: 0, stock: 0, category: '' });
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditProduct(product);
  };

  const handleUpdateProduct = () => {
    if (editProduct) {
      setProducts(products.map((p) => (p.id === editProduct.id ? editProduct : p)));
      setEditProduct(null);
    }
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    filterProducts(value, filterCategory);
  };

  const handleFilterCategory = (category: string) => {
    setFilterCategory(category);
    filterProducts(search, category);
  };

  const filterProducts = (searchValue: string, categoryValue: string) => {
    setFilteredProducts(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          (categoryValue ? p.category === categoryValue : true)
      )
    );
  };

  return (
    <Box>
      {/* Formulário para Adicionar Produto */}
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

      {/* Filtros e Pesquisa */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
        <TextField
          label="Pesquisar Produto"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
        />
        <Select
          value={filterCategory}
          onChange={(e) => handleFilterCategory(e.target.value)}
          displayEmpty
          fullWidth
        >
          <MenuItem value="">Todas as Categorias</MenuItem>
          <MenuItem value="Eletrônicos">Eletrônicos</MenuItem>
          <MenuItem value="Roupas">Roupas</MenuItem>
          <MenuItem value="Alimentos">Alimentos</MenuItem>
        </Select>
      </Box>

      {/* Listagem de Produtos */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Produtos
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Estoque</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>MT {product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredProducts.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      Nenhum produto encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Modal para Editar Produto */}
      {editProduct && (
        <Dialog open onClose={() => setEditProduct(null)}>
          <DialogTitle>Editar Produto</DialogTitle>
          <DialogContent>
            <TextField
              label="Nome"
              fullWidth
              value={editProduct.name}
              onChange={(e) =>
                setEditProduct({ ...editProduct, name: e.target.value })
              }
              margin="dense"
            />
            <TextField
              label="Categoria"
              fullWidth
              value={editProduct.category}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
              margin="dense"
            />
            <TextField
              label="Descrição"
              fullWidth
              multiline
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct({ ...editProduct, description: e.target.value })
              }
              margin="dense"
            />
            <TextField
              label="Preço (MT)"
              type="number"
              fullWidth
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  price: Number(e.target.value) || 0,
                })
              }
              margin="dense"
            />
            <TextField
              label="Estoque"
              type="number"
              fullWidth
              value={editProduct.stock}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  stock: Number(e.target.value) || 0,
                })
              }
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditProduct(null)} color="secondary">
              Cancelar
            </Button>
            <Button onClick={handleUpdateProduct} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ProductCatalog;