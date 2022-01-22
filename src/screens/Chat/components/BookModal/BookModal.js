import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { withTheme } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Icon } from "../../../../library/Atoms/Icon";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";
import Modal from "../../../../library/Molecules/Modal";

const BookModal = ({ open, theme, componentStyles, toggleModal }) => {
  const emoji = useMemo(() => {
    const icons = ["slightly-smile", "smiley", "smiling"];
    return icons[Math.floor(Math.random() * icons.length)];
  }, []);

  return (
    <Modal style={componentStyles.modal} open={open}>
      <RowLayout style={componentStyles.header}>
        <TouchableOpacity onPress={toggleModal}>
          <Icon name="close" color={theme.colors.black} size={theme.sizes.scale(35)} />
        </TouchableOpacity>
        <Text style={componentStyles.headerTitle}>Here your book</Text>
      </RowLayout>
      <Icon name={emoji} color={theme.colors.black} size={theme.sizes.scale(100)} />
      <VerticalLayout>
        <Text style={componentStyles.bookTitle}>Name of book</Text>
        <Text style={componentStyles.author}>Authors</Text>
        <Text style={componentStyles.description}>Description</Text>
      </VerticalLayout>
      <PrimaryButton style={componentStyles.btn} onPress={() => {}}>
        <Text style={componentStyles.btnText}>Search book details</Text>
      </PrimaryButton>
    </Modal>
  );
};

export default props => withTheme(BookModal)({ ...props, componentStyles: require("./BookModal.styles").styles });
