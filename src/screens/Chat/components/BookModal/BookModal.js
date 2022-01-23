import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import { withTheme } from "../../../../hoc/withTheme";
import RowLayout from "../../../../library/Layouts/RowLayout";
import PrimaryButton from "../../../../library/Atoms/Button/PrimaryButton";
import { Icon } from "../../../../library/Atoms/Icon";
import VerticalLayout from "../../../../library/Layouts/VerticalLayout";
import Modal from "../../../../library/Molecules/Modal";
import api from "../../../../api";

const BookModal = ({ open, theme, componentStyles, toggleModal, bookId = null }) => {
  const [book, setBook] = useState(null);

  const emoji = useMemo(() => {
    const icons = ["slightly-smile", "smiley", "smiling"];
    return icons[Math.floor(Math.random() * icons.length)];
  }, []);

  useEffect(() => {
    if (open && bookId !== null) {
      api.getBookData(bookId).then(book => setBook(book.data));
    }
  }, [open, bookId]);

  const openWeb = useCallback(bookName => {
    Linking.openURL("https://www.google.com/search?q=" + bookName);
  });

  console.log(book);
  const authors = book?.authors.map(author => author.name).join(", ");
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
            <Text style={componentStyles.description}>{book.description}</Text>
          </VerticalLayout>
          <PrimaryButton style={componentStyles.btn} onPress={() => openWeb(book.title)}>
            <Text style={componentStyles.btnText}>Search book on the web</Text>
          </PrimaryButton>
        </>
      )}
    </Modal>
  );
};

export default props => withTheme(BookModal)({ ...props, componentStyles: require("./BookModal.styles").styles });
