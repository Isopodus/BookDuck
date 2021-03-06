import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import { withTheme } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Icon } from "../../../../library/Atoms/Icon";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";
import Modal from "../../../../library/Molecules/Modal";
import api from "../../../../requests/api";

const BookModal = ({ open, theme, componentStyles, toggleModal, book }) => {
  const emoji = useMemo(() => {
    const icons = ["slightly-smile", "smiley", "smiling"];
    return icons[Math.floor(Math.random() * icons.length)];
  }, []);

  const authors = useMemo(() => {
    if (!book) return "";
    return book?.authors.map(author => author.name).join(", ");
  }, [book]);

  const openWeb = useCallback(book => {
    Linking.openURL("https://www.google.com/search?q=" + book.title + " - " + book.authors[0]?.name);
  }, []);

  return (
    <Modal style={componentStyles.modal} open={open}>
      {book && (
        <>
          <RowLayout style={componentStyles.header}>
            <TouchableOpacity onPress={toggleModal}>
              <Icon name="close" color={theme.colors.black} size={theme.sizes.scale(35)} />
            </TouchableOpacity>
            <Text style={componentStyles.headerTitle}>Here is your book</Text>
          </RowLayout>
          <Icon name={emoji} color={theme.colors.black} size={theme.sizes.scale(100)} />
          <VerticalLayout>
            <Text style={componentStyles.bookTitle}>{book.title}</Text>
            <Text style={componentStyles.author}>{authors}</Text>
            <Text style={componentStyles.description} numberOfLines={5}>
              {book.description}
            </Text>
          </VerticalLayout>
          <PrimaryButton style={componentStyles.btn} onPress={() => openWeb(book)}>
            <Text style={componentStyles.btnText}>Search this book on the web</Text>
          </PrimaryButton>
        </>
      )}
    </Modal>
  );
};

export default props => withTheme(BookModal)({ ...props, componentStyles: require("./BookModal.styles").styles });
