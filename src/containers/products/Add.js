import { Form, notification, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

import { AddProducts as AddProductsComponent } from "../../components/products";
import api from "../../services/api";
import { itemRender } from "../../utils";

const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/products",
    breadcrumbName: "Produtos",
  },
  {
    path: "/products/new",
    breadcrumbName: "Adicionar",
  },
];

const AddProducts = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await api.post("/products", form.getFieldsValue());

      notification.success({
        message: "Login feito com sucesso!",
        description: "Use nossa plataforma!",
      });
      navigate("/");
    } catch {
      notification.error({
        message: "Erro ao cadastrar produto!",
        description: "Tente novamente...",
      });
    }
  };
  return (
    <>
      <PageHeader
        title="Adicione um produto"
        breadcrumb={{ routes, itemRender }}
      />
      <AddProductsComponent {...{ form, onSubmit }} />
    </>
  );
};

export default AddProducts;
