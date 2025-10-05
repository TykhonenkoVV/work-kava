import { useEffect, useState } from 'react';

export const useClickOutsideModal = (ref, callback, id) => {
  const count = ref.length;
  const [refs, setRefs] = useState({});

  const handleClick = e => {
    if (ref.length > 0 && count === 1) {
      setRefs({ ...refs, [id]: { ref1: ref[0] } });
      if (
        refs[id]?.ref1?.current &&
        !refs[id]?.ref1?.current?.contains(e.target)
      ) {
        callback(id);
      }
    }
    if (ref.length > 0 && count === 2) {
      setRefs({ ...refs, [id]: { ref1: ref[0], ref2: ref[1] } });
      if (
        refs[id]?.ref1?.current &&
        !refs[id]?.ref1?.current?.contains(e.target) &&
        !refs[id]?.ref2?.current?.contains(e.target)
      ) {
        callback(id);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};
